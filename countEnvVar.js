const file = `"""

DEBUG = False
DEBUG_PROPAGATE_EXCEPTIONS = False
ADMINS = []
INTERNAL_IPS = []
ALLOWED_HOSTS = []
TIME_ZONE = 'America/Chicago'
USE_TZ = False
LANGUAGE_CODE = 'en-us'
LANGUAGES = [
    ('af', gettext_noop('Afrikaans')),
    ('ar', gettext_noop('Arabic')),
    ('ar-dz', gettext_noop('Algerian Arabic')),
    ('ast', gettext_noop('Asturian')),
    ('az', gettext_noop('Azerbaijani')),
    ('bg', gettext_noop('Bulgarian')),
    ('be', gettext_noop('Belarusian')),
    ('bn', gettext_noop('Bengali')),
    ('br', gettext_noop('Breton')),
    ('bs', gettext_noop('Bosnian')),
    ('ca', gettext_noop('Catalan')),
    ('cs', gettext_noop('Czech')),
    ('cy', gettext_noop('Welsh')),
    ('da', gettext_noop('Danish')),
    ('de', gettext_noop('German')),
    ('dsb', gettext_noop('Lower Sorbian')),
    ('el', gettext_noop('Greek')),
    ('en', gettext_noop('English')),
    ('en-au', gettext_noop('Australian English')),
    ('en-gb', gettext_noop('British English')),
    ('eo', gettext_noop('Esperanto')),
    ('es', gettext_noop('Spanish')),
    ('es-ar', gettext_noop('Argentinian Spanish')),
    ('es-co', gettext_noop('Colombian Spanish')),
    ('es-mx', gettext_noop('Mexican Spanish')),
    ('es-ni', gettext_noop('Nicaraguan Spanish')),
    ('es-ve', gettext_noop('Venezuelan Spanish')),
    ('et', gettext_noop('Estonian')),
    ('eu', gettext_noop('Basque')),
    ('fa', gettext_noop('Persian')),
    ('fi', gettext_noop('Finnish')),
    ('fr', gettext_noop('French')),
    ('fy', gettext_noop('Frisian')),
    ('ga', gettext_noop('Irish')),
    ('gd', gettext_noop('Scottish Gaelic')),
    ('gl', gettext_noop('Galician')),
    ('he', gettext_noop('Hebrew')),
    ('hi', gettext_noop('Hindi')),
    ('hr', gettext_noop('Croatian')),
    ('hsb', gettext_noop('Upper Sorbian')),
    ('hu', gettext_noop('Hungarian')),
    ('hy', gettext_noop('Armenian')),
    ('ia', gettext_noop('Interlingua')),
    ('id', gettext_noop('Indonesian')),
    ('ig', gettext_noop('Igbo')),
    ('io', gettext_noop('Ido')),
    ('is', gettext_noop('Icelandic')),
    ('it', gettext_noop('Italian')),
    ('ja', gettext_noop('Japanese')),
    ('ka', gettext_noop('Georgian')),
    ('kab', gettext_noop('Kabyle')),
    ('kk', gettext_noop('Kazakh')),
    ('km', gettext_noop('Khmer')),
    ('kn', gettext_noop('Kannada')),
    ('ko', gettext_noop('Korean')),
    ('ky', gettext_noop('Kyrgyz')),
    ('lb', gettext_noop('Luxembourgish')),
    ('lt', gettext_noop('Lithuanian')),
    ('lv', gettext_noop('Latvian')),
    ('mk', gettext_noop('Macedonian')),
    ('ml', gettext_noop('Malayalam')),
    ('mn', gettext_noop('Mongolian')),
    ('mr', gettext_noop('Marathi')),
    ('my', gettext_noop('Burmese')),
    ('nb', gettext_noop('Norwegian Bokmål')),
    ('ne', gettext_noop('Nepali')),
    ('nl', gettext_noop('Dutch')),
    ('nn', gettext_noop('Norwegian Nynorsk')),
    ('os', gettext_noop('Ossetic')),
    ('pa', gettext_noop('Punjabi')),
    ('pl', gettext_noop('Polish')),
    ('pt', gettext_noop('Portuguese')),
    ('pt-br', gettext_noop('Brazilian Portuguese')),
    ('ro', gettext_noop('Romanian')),
    ('ru', gettext_noop('Russian')),
    ('sk', gettext_noop('Slovak')),
    ('sl', gettext_noop('Slovenian')),
    ('sq', gettext_noop('Albanian')),
    ('sr', gettext_noop('Serbian')),
    ('sr-latn', gettext_noop('Serbian Latin')),
    ('sv', gettext_noop('Swedish')),
    ('sw', gettext_noop('Swahili')),
    ('ta', gettext_noop('Tamil')),
    ('te', gettext_noop('Telugu')),
    ('tg', gettext_noop('Tajik')),
    ('th', gettext_noop('Thai')),
    ('tk', gettext_noop('Turkmen')),
    ('tr', gettext_noop('Turkish')),
    ('tt', gettext_noop('Tatar')),
    ('udm', gettext_noop('Udmurt')),
    ('uk', gettext_noop('Ukrainian')),
    ('ur', gettext_noop('Urdu')),
    ('uz', gettext_noop('Uzbek')),
    ('vi', gettext_noop('Vietnamese')),
    ('zh-hans', gettext_noop('Simplified Chinese')),
    ('zh-hant', gettext_noop('Traditional Chinese')),
]
LANGUAGES_BIDI = ["he", "ar", "ar-dz", "fa", "ur"]
USE_I18N = True
LOCALE_PATHS = []
LANGUAGE_COOKIE_NAME = 'django_language'
LANGUAGE_COOKIE_AGE = None
LANGUAGE_COOKIE_DOMAIN = None
LANGUAGE_COOKIE_PATH = '/'
LANGUAGE_COOKIE_SECURE = False
LANGUAGE_COOKIE_HTTPONLY = False
LANGUAGE_COOKIE_SAMESITE = None
USE_L10N = False
MANAGERS = ADMINS
DEFAULT_CHARSET = 'utf-8'
SERVER_EMAIL = 'root@localhost'
DATABASES = {}
DATABASE_ROUTERS = []
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'localhost'
EMAIL_PORT = 25


EMAIL_USE_LOCALTIME = False


EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
EMAIL_USE_TLS = False
EMAIL_USE_SSL = False
EMAIL_SSL_CERTFILE = None
EMAIL_SSL_KEYFILE = None
EMAIL_TIMEOUT = None


INSTALLED_APPS = []

TEMPLATES = []


FORM_RENDERER = 'django.forms.renderers.DjangoTemplates'



DEFAULT_FROM_EMAIL = 'webmaster@localhost'



EMAIL_SUBJECT_PREFIX = '[Django] '


APPEND_SLASH = True


PREPEND_WWW = False


FORCE_SCRIPT_NAME = None











DISALLOWED_USER_AGENTS = []

ABSOLUTE_URL_OVERRIDES = {}











IGNORABLE_404_URLS = []




SECRET_KEY = ''


DEFAULT_FILE_STORAGE = 'django.core.files.storage.FileSystemStorage'



MEDIA_ROOT = ''



MEDIA_URL = ''



STATIC_ROOT = None



STATIC_URL = None


FILE_UPLOAD_HANDLERS = [
    'django.core.files.uploadhandler.MemoryFileUploadHandler',
    'django.core.files.uploadhandler.TemporaryFileUploadHandler',
]



FILE_UPLOAD_MAX_MEMORY_SIZE = 2621440  # i.e. 2.5 MB



DATA_UPLOAD_MAX_MEMORY_SIZE = 2621440  # i.e. 2.5 MB



DATA_UPLOAD_MAX_NUMBER_FIELDS = 1000




FILE_UPLOAD_TEMP_DIR = None



FILE_UPLOAD_PERMISSIONS = 0o644




FILE_UPLOAD_DIRECTORY_PERMISSIONS = None





FORMAT_MODULE_PATH = None



DATE_FORMAT = 'N j, Y'



DATETIME_FORMAT = 'N j, Y, P'



TIME_FORMAT = 'P'




YEAR_MONTH_FORMAT = 'F Y'




MONTH_DAY_FORMAT = 'F j'



SHORT_DATE_FORMAT = 'm/d/Y'




SHORT_DATETIME_FORMAT = 'm/d/Y P'





DATE_INPUT_FORMATS = [
    '%Y-%m-%d', '%m/%d/%Y', '%m/%d/%y',  # '2006-10-25', '10/25/2006', '10/25/06'
    '%b %d %Y', '%b %d, %Y',             # 'Oct 25 2006', 'Oct 25, 2006'
    '%d %b %Y', '%d %b, %Y',             # '25 Oct 2006', '25 Oct, 2006'
    '%B %d %Y', '%B %d, %Y',             # 'October 25 2006', 'October 25, 2006'
    '%d %B %Y', '%d %B, %Y',             # '25 October 2006', '25 October, 2006'
]





TIME_INPUT_FORMATS = [
    '%H:%M:%S',     # '14:30:59'
    '%H:%M:%S.%f',  # '14:30:59.000200'
    '%H:%M',        # '14:30'
]






DATETIME_INPUT_FORMATS = [
    '%Y-%m-%d %H:%M:%S',     # '2006-10-25 14:30:59'
    '%Y-%m-%d %H:%M:%S.%f',  # '2006-10-25 14:30:59.000200'
    '%Y-%m-%d %H:%M',        # '2006-10-25 14:30'
    '%m/%d/%Y %H:%M:%S',     # '10/25/2006 14:30:59'
    '%m/%d/%Y %H:%M:%S.%f',  # '10/25/2006 14:30:59.000200'
    '%m/%d/%Y %H:%M',        # '10/25/2006 14:30'
    '%m/%d/%y %H:%M:%S',     # '10/25/06 14:30:59'
    '%m/%d/%y %H:%M:%S.%f',  # '10/25/06 14:30:59.000200'
    '%m/%d/%y %H:%M',        # '10/25/06 14:30'
]



FIRST_DAY_OF_WEEK = 0


DECIMAL_SEPARATOR = '.'


USE_THOUSAND_SEPARATOR = False



NUMBER_GROUPING = 0


THOUSAND_SEPARATOR = ','


DEFAULT_TABLESPACE = ''
DEFAULT_INDEX_TABLESPACE = ''


DEFAULT_AUTO_FIELD = 'django.db.models.AutoField'


X_FRAME_OPTIONS = 'DENY'

USE_X_FORWARDED_HOST = False
USE_X_FORWARDED_PORT = False






WSGI_APPLICATION = None








SECURE_PROXY_SSL_HEADER = None








MIDDLEWARE = []






SESSION_CACHE_ALIAS = 'default'

SESSION_COOKIE_NAME = 'sessionid'

SESSION_COOKIE_AGE = 60 * 60 * 24 * 7 * 2

SESSION_COOKIE_DOMAIN = None

SESSION_COOKIE_SECURE = False

SESSION_COOKIE_PATH = '/'

SESSION_COOKIE_HTTPONLY = True


SESSION_COOKIE_SAMESITE = 'Lax'

SESSION_SAVE_EVERY_REQUEST = False

SESSION_EXPIRE_AT_BROWSER_CLOSE = False

SESSION_ENGINE = 'django.contrib.sessions.backends.db'


SESSION_FILE_PATH = None

SESSION_SERIALIZER = 'django.contrib.sessions.serializers.JSONSerializer'






CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
    }
}
CACHE_MIDDLEWARE_KEY_PREFIX = ''
CACHE_MIDDLEWARE_SECONDS = 600
CACHE_MIDDLEWARE_ALIAS = 'default'





AUTH_USER_MODEL = 'auth.User'

AUTHENTICATION_BACKENDS = ['django.contrib.auth.backends.ModelBackend']

LOGIN_URL = '/accounts/login/'

LOGIN_REDIRECT_URL = '/accounts/profile/'

LOGOUT_REDIRECT_URL = None


PASSWORD_RESET_TIMEOUT = 60 * 60 * 24 * 3




PASSWORD_HASHERS = [
    'django.contrib.auth.hashers.PBKDF2PasswordHasher',
    'django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher',
    'django.contrib.auth.hashers.Argon2PasswordHasher',
    'django.contrib.auth.hashers.BCryptSHA256PasswordHasher',
]

AUTH_PASSWORD_VALIDATORS = []





SIGNING_BACKEND = 'django.core.signing.TimestampSigner'







CSRF_FAILURE_VIEW = 'django.views.csrf.csrf_failure'


CSRF_COOKIE_NAME = 'csrftoken'
CSRF_COOKIE_AGE = 60 * 60 * 24 * 7 * 52
CSRF_COOKIE_DOMAIN = None
CSRF_COOKIE_PATH = '/'
CSRF_COOKIE_SECURE = False
CSRF_COOKIE_HTTPONLY = False
CSRF_COOKIE_SAMESITE = 'Lax'
CSRF_HEADER_NAME = 'HTTP_X_CSRFTOKEN'
CSRF_TRUSTED_ORIGINS = []
CSRF_USE_SESSIONS = False






MESSAGE_STORAGE = 'django.contrib.messages.storage.fallback.FallbackStorage'









LOGGING_CONFIG = 'logging.config.dictConfig'


LOGGING = {}



DEFAULT_EXCEPTION_REPORTER = 'django.views.debug.ExceptionReporter'



DEFAULT_EXCEPTION_REPORTER_FILTER = 'django.views.debug.SafeExceptionReporterFilter'






TEST_RUNNER = 'django.test.runner.DiscoverRunner'



TEST_NON_SERIALIZED_APPS = []






FIXTURE_DIRS = []


STATICFILES_DIRS = []

STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.StaticFilesStorage'

STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',

]


MIGRATION_MODULES = {}


SILENCED_SYSTEM_CHECKS = []

SECURE_BROWSER_XSS_FILTER = False
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_HSTS_INCLUDE_SUBDOMAINS = False
SECURE_HSTS_PRELOAD = False
SECURE_HSTS_SECONDS = 0
SECURE_REDIRECT_EXEMPT = []
SECURE_REFERRER_POLICY = 'same-origin'
SECURE_SSL_HOST = None
SECURE_SSL_REDIRECT = False`;

console.log((file.match(new RegExp("False", "g")) || []).length);
