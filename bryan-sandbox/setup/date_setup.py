# To Run :
# python3 date_setup.py --date=11/1/2022 --course=FSW115 --course_id=20221128SC8A --morning_start=8 --evening_start=18   

import argparse
import datetime

ap = argparse.ArgumentParser()
ap.add_argument("--date", required=True, help="first date of class you wil teach (MM/DD/YYYY)")
ap.add_argument("--course_name", required=True, help="course name (FSW115)")
ap.add_argument("--course_id", required=True, help="course id in canvas (20221128SC8A)")
ap.add_argument("--morning_start", required=True, help="morning start time (8)")
ap.add_argument("--evening_start", required=True, help="evening start time (18)")
args = vars(ap.parse_args())
start_date = args["date"]
course_name = args["course_name"]
course_id = args["course_id"]
morning_start = args["morning_start"]
evening_start = args["evening_start"]

NAME = 'Live Session Week WEEK_NUMBER AM/PM COURSE_NAME'
NAME = NAME.replace('COURSE_NAME', f"{course_name}-{course_id}")

# Name - Live Session, FSW115, Tues, a.m. session
# Description - Tuesday, November 1, 2022
# Start Time - 10/21/2022 07:00 PM
# End Time - 10/21/2022 08:00 PM

session = 0

# Sets the Dates
for i in range(4):
    init_datetime = datetime.datetime.strptime(start_date, "%m/%d/%Y")
    class_date = init_datetime + datetime.timedelta(days=i*14)
    display_date = class_date.strftime("%m/%d/%Y")


    # Sets the Times
    for j in range(2):
        print('\n')
        week_number = 1
        if i == 1: week_number = 3
        if i == 2: week_number = 5
        if i == 3: week_number = 7

        # session = session + 1
        display_name = NAME.replace('WEEK_NUMBER', str(week_number))
        day_of_week = class_date.strftime("%A")
        display_name_2 = display_name.replace('DAY', str(day_of_week))
        am_pm = ''
        start_time = None
        if j % 2 == 0:
            am_pm = '(A.M.)'
            start_time = morning_start
        else:
            am_pm = '(P.M.)'
            start_time = evening_start
        display_name_final = display_name_2.replace('AM/PM', am_pm)
        description = class_date.strftime("%A, %B %d, %Y")

        print(display_name_final)
        print(description)

        start_time = class_date.replace(hour=int(start_time))
        start_time_display = start_time.strftime("%m/%d/%Y %I:%M %p")
        print(start_time_display)

        end_time = start_time + datetime.timedelta(hours=1)
        end_time_display = end_time.strftime("%m/%d/%Y %I:%M %p")
        print(end_time_display)

