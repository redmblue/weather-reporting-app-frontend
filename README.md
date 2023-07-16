# WebAppFrontendWx

This is the frontend for the Weather Reporting app found here: http://weather-report-system.s3-website.us-east-2.amazonaws.com/
This frontend (Angular using Material and Tailwinds) is hosted in an AWS S3 Bucket, while the backend (.NET) and MySQL database are hosted on Azure App Service in the same instance. 

Tutorial:
Weather reports will be refreshed any time you visit the home page, but if you would like to manually refresh it, click the "Refresh Reports" button. To add a report, click "Add Report" and fill in the boxes, the notes box is optional. The weather reports are color coded based on severity (0-3 green, 4-7 yellow, 7-10 red). To edit a weather report, click edit, make your changes, and then submit. To delete a weather report, click on the white bolded text that says "Type of Weather: {type of weather}," and then click "Delete."

Backend: https://github.com/redmblue/weather-reporting-app-backend/
