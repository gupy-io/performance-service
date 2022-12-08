SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

mysql -u root --password=root -h 127.0.0.1 < ${SCRIPT_DIR}/migrations.sql
