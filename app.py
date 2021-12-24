import flask
import ast
from flask import Flask, render_template, request, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from loggedin import LogedIn, logins
import re


regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
use_the_ip = ''
ip_address = ''

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    postcode = db.Column(db.String(7), nullable=False)
    adres = db.Column(db.String(120), nullable=False)
    ip_addr = db.Column(db.String(15), nullable=False)

    def __repr__(self):
        return f"user('{self.id}',  '{self.username}', '{self.email}')"

def check(email): 
	if(re.search(regex,email)): 
		return True
	else: 
		return False


@app.route('/')
def base():
    global ip_address
    ip_address = flask.request.remote_addr
    if ip_address in logins:
        return render_template('index_home.html')
    else:
        return redirect('/index_login.html/')

@app.route('/index_winkelmand.html/', methods=['POST', 'GET'])
def winkelmand():
    global ip_address
    ip_address = flask.request.remote_addr
    if ip_address in logins:
        user = User.query.filter_by(ip_addr=use_the_ip).first()
        if request.method == 'POST':
            data = request.form['hiddenValue'].replace("true", "True").replace('"', "'")
            Dictdata = ast.literal_eval(data)
            aantalKeys = list(Dictdata.keys())

            with open('producten.txt', 'a') as file:
                for i in range(len(aantalKeys)):
                    file.write("    " + str(Dictdata[aantalKeys[i]]['name']) + ": " + str(Dictdata[aantalKeys[i]]['inWinkelmandje']))
                    file.write('\n')
                file.write("\nNaam: {0}, Adres: {1}, Postcode: {2}\n\n\n".format(user.username, user.adres, user.postcode))
                file.close()
                                
        return render_template('index_winkelmand.html/', naam=user.username, straat=user.adres, postcode=user.postcode)
    else:
        return redirect('/index_login.html')

@app.route('/ghb.html/')
def ghb():
    global ip_address
    ip_address = flask.request.remote_addr
    if ip_address in logins:
        return render_template('ghb.html')
    else:
        return redirect('/index_login.html/')

@app.route('/index_home.html/')
def home():
    global ip_address
    ip_address = flask.request.remote_addr
    if ip_address in logins:
        return render_template('index_home.html')
    else:
        return redirect('/index_login.html/')

@app.route('/index_account.html/')
def account():
    global ip_address
    ip_address = flask.request.remote_addr
    if ip_address in logins:
        user = User.query.filter_by(ip_addr=use_the_ip).first()
        return render_template('index_account.html', name=user.username, email=user.email, postcode=user.postcode)
    else:
        return redirect('/index_login.html/')

@app.route('/index_account.html/index_log-out.html/')
def logout():
    global ip_address, logins
    ip_address = flask.request.remote_addr
    if ip_address in logins:
        logins.remove(ip_address)
        return redirect('/index_login.html/')
    else:
        return redirect('/index_login.html/')
    

@app.route('/index_account.html/index_update-password.html/', methods=['POST', 'GET'])
def update_password():
    global ip_address
    ip_address = flask.request.remote_addr
    if ip_address in logins:
        if request.method == 'POST':
            old_password = request.form['oldPass']
            new_password = request.form['newPass']
            confirm_password = request.form['confirmPass']

            user = User.query.filter_by(ip_addr=use_the_ip).first()
            print(user.password)
            valid_password = bcrypt.check_password_hash(user.password, old_password)
            if not valid_password:
                return render_template('index_update-password.html', error='Niet het juiste wachtwoord')
            elif new_password == old_password:
                    return render_template('index_update-password.html', error="Het nieuwe wachtwoord kan niet hetzelfde zijn als het oude wachtwoord")
            elif len(new_password) < 6:
                return render_template('index_update-password.html', error='Je wachtwoord is te kort')
            elif valid_password and new_password == confirm_password:
                new_password = bcrypt.generate_password_hash(new_password).decode('utf-8')
                user.password = new_password
                db.session.commit()
                return redirect('/index_account.html')
            else:
                return render_template('index_update-password.html', error='Je twee wachtwoorden zijn niet hetzelfde')
        user = User.query.filter_by(ip_addr=use_the_ip).first()
        return render_template('index_update-password.html', name=user.username)
    else:
        return redirect('/index_login.html/')


@app.route('/index_account.html/index_update-username.html/', methods=['POST', 'GET'])
def update_username():
    global ip_address
    ip_address = flask.request.remote_addr
    if ip_address in logins:
        if request.method == 'POST':
            old_password = request.form['oldPass']
            new_username = request.form['newUsername']
            confirm_username = request.form['confirmUser']

            user = User.query.filter_by(ip_addr=use_the_ip).first()
            valid_password = bcrypt.check_password_hash(user.password, old_password)
            if not valid_password:
                return render_template('index_update-password.html', error='Niet het juiste wachtwoord')
            elif new_username == user.username:
                return render_template('index_update-password.html', error="Het nieuwe wachtwoord kan niet hetzelfde zijn als je oude wachtwoord")
            elif len(new_username) < 6:
                return render_template('index_update-password.html', error='Je gebruikersnaam is te kort')
            elif valid_password and new_username == confirm_username:
                user.username = new_username
                db.session.commit()
                
                return redirect('/index_account.html')
            else:
                return render_template('index_update-password.html', error='De twee gebruikersnamen zijn niet hetzelfde')
        user = User.query.filter_by(ip_addr=use_the_ip).first()
        return render_template('index_update-username.html', name=user.username)
    else:
        return redirect('/index_login.html/')



@app.route('/index_login.html/', methods=['POST', 'GET'])
def index_login():
    global LogedIn, logins
    global filled_username
    global use_the_ip
    global ip_address
    ip_address = flask.request.remote_addr

    if request.method == 'POST':
        filled_username = request.form['userName']
        filled_password = request.form['password']

        user = User.query.filter_by(ip_addr=ip_address).first()

        check_username = User.query.filter_by(username=filled_username).first()
        if check_username != None:
            valid_password = bcrypt.check_password_hash(check_username.password, filled_password)

            try:
                if filled_username == check_username.username and valid_password == True:
                    use_the_ip = user.ip_addr
                    logins.append(ip_address)
                    print(logins)
                    return redirect('/index_home.html/')
            except:
                # return redirect('/index_sign-up.html/')
                return render_template('/index_login.html/', error="Je wachtwoord is onjuist. ")

        elif check_username == None:
            # return redirect('/index_sign-up.html/')
            return render_template('/index_login.html/', error="Je gegevens zijn onjuist. ")
    return render_template('/index_login.html/')






@app.route('/index_sign-up.html/', methods=['POST', 'GET'])
def index_signUp():
    global ip_address
    ip_address = flask.request.remote_addr
    if request.method == 'POST':
        filled_username = request.form['userNameSignup'].replace(" ", "")
        filled_password = request.form['passwordSignup'].replace(" ", "")
        filled_password_check = request.form['passwordSignupCheck'].replace(" ", "")
        filled_email = request.form['email'].replace(" ", "")
        filled_postcode = request.form['postcode'].replace(" ", "")
        filled_adres = request.form['adres']

        check_username = User.query.filter_by(username=filled_username).first()
        check_email = User.query.filter_by(email=filled_email).first()

        if filled_password != filled_password_check:
            return render_template('index_sign-up.html', error='De twee wachtwoorden zijn niet hetzelfde')
        try:
            if check_username.username == filled_username:
                return render_template('index_sign-up.html', error='Deze gebruikersnaam is al in gebruik')
        except:
            pass
        
        try:
            if check_email.email == filled_email:
                return render_template('index_sign-up.html', error='Je hebt al een account')
        except:
            pass
        
        try:
            if filled_username == '':
                return render_template('index_sign-up.html', error='Vul je gebruikersnaam in')
            elif filled_password == '':
                return render_template('index_sign-up.html', error='Vul een wachtwoord in')
            elif filled_email == '':
                return render_template('index_sign-up.html', error='Vul een email in')
            elif filled_postcode == '':
                return render_template('index_sign-up.html', error='Vul een postcode in')
            elif len(filled_password) < 6:
                return render_template('index_sign-up.html', error='Je wachtwoord is niet lang genoeg')
            elif len(filled_username) < 6:
                return render_template('index_sign-up.html', error='Je gebruikersnaam is niet lang genoeg')
            elif not check(filled_email):
                return render_template('index_sign-up.html', error='Je email is niet correct')
            elif len(filled_postcode) > 6:  
                return render_template('index_sign-up.html', error='Je hebt geen geldige postcode ingevoerd')
        except:
            pass

        hashed_password = bcrypt.generate_password_hash(filled_password).decode('utf-8')

        user = User(username=filled_username, password=hashed_password, email=filled_email, postcode=filled_postcode, ip_addr=ip_address, adres=filled_adres)
        db.session.add(user)
        db.session.commit()
        return redirect('/')
    return render_template('index_sign-up.html')


if __name__ == "__main__":
    app.run(debug=True)