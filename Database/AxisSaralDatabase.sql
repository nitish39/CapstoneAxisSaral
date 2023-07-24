-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: axis_saral_db
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('admin@axis.com','Manisha','Yadav','12345678','9865321475');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `administrator`
--

DROP TABLE IF EXISTS `administrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrator` (
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrator`
--

LOCK TABLES `administrator` WRITE;
/*!40000 ALTER TABLE `administrator` DISABLE KEYS */;
/*!40000 ALTER TABLE `administrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment_res`
--

DROP TABLE IF EXISTS `comment_res`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment_res` (
  `cmtres_id` int NOT NULL AUTO_INCREMENT,
  `ecmt_content` varchar(255) DEFAULT NULL,
  `empl_name` varchar(255) DEFAULT NULL,
  `empl_role` varchar(255) DEFAULT NULL,
  `epost_id` int NOT NULL,
  PRIMARY KEY (`cmtres_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_res`
--

LOCK TABLES `comment_res` WRITE;
/*!40000 ALTER TABLE `comment_res` DISABLE KEYS */;
INSERT INTO `comment_res` VALUES (1,'good','Employee 1','Role 1',4),(2,'good post','Employee 1','Role 1',4),(3,'Commented by Nitish, have a nice day Good Morning','Nitish Raj','Support Team',6),(4,'good post','Apeksha','Business Analyst',7),(5,'Commented','Nitish Raj','Support Team',9),(6,'hello','Nitish Raj','Support Team',10),(7,'hello','Nitish Raj','Support Team',9),(8,'hello','Apeksha','Business Analyst',11),(9,'fghfh','Apeksha','Business Analyst',17),(10,'hello','Apeksha','Business Analyst',19),(11,'hhhh','Apeksha','Business Analyst',20),(12,'night','Apeksha','Business Analyst',21);
/*!40000 ALTER TABLE `comment_res` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment_response`
--

DROP TABLE IF EXISTS `comment_response`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment_response` (
  `empl_name` varchar(255) NOT NULL,
  `ecmt_content` varchar(255) DEFAULT NULL,
  `ecmt_datetime` date DEFAULT NULL,
  `empl_role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`empl_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_response`
--

LOCK TABLES `comment_response` WRITE;
/*!40000 ALTER TABLE `comment_response` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment_response` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `dept_id` int NOT NULL AUTO_INCREMENT,
  `dept_code` varchar(255) NOT NULL,
  `dept_desc` varchar(255) NOT NULL,
  `dept_name` varchar(255) NOT NULL,
  PRIMARY KEY (`dept_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'QA001','This department is responsible for the quality of software development and deployment.','Human Resource (HR)'),(2,'IT001','Responsible for maintaining the hardware and software systems within an organization','Information Technology (IT)'),(3,'DV001','This department is responsible for designing, coding, and testing the software product','Development'),(4,'LE001','The section of a company responsible for keeping that company\'s operations compliant with all the relevant laws and regulations','Legal');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ecomment`
--

DROP TABLE IF EXISTS `ecomment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecomment` (
  `ecmt_id` int NOT NULL AUTO_INCREMENT,
  `ecmt_content` varchar(255) NOT NULL,
  `ecomment_empl_id` int DEFAULT NULL,
  `employee_post_epost_id` int DEFAULT NULL,
  PRIMARY KEY (`ecmt_id`),
  KEY `FK29i1okhxtsgyosadiwi6t8dhp` (`ecomment_empl_id`),
  KEY `FK1wm9b2n8fr8uyx705t0trrcq` (`employee_post_epost_id`),
  CONSTRAINT `FK1wm9b2n8fr8uyx705t0trrcq` FOREIGN KEY (`employee_post_epost_id`) REFERENCES `employee_post` (`epost_id`),
  CONSTRAINT `FK29i1okhxtsgyosadiwi6t8dhp` FOREIGN KEY (`ecomment_empl_id`) REFERENCES `employee` (`empl_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecomment`
--

LOCK TABLES `ecomment` WRITE;
/*!40000 ALTER TABLE `ecomment` DISABLE KEYS */;
INSERT INTO `ecomment` VALUES (1,'good',1,4),(2,'good post',1,4),(3,'Commented by Nitish, have a nice day Good Morning',1,6),(4,'good post',2,7),(5,'Commented',1,9),(6,'hello',1,10),(7,'hello',1,9),(8,'hello',2,11),(9,'fghfh',2,17),(10,'hello',2,19),(11,'hhhh',2,20),(12,'night',2,21);
/*!40000 ALTER TABLE `ecomment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `empl_id` int NOT NULL AUTO_INCREMENT,
  `empl_address` varchar(255) DEFAULT NULL,
  `empl_code` varchar(255) NOT NULL,
  `empl_contact` varchar(255) NOT NULL,
  `empl_dob` date NOT NULL,
  `empl_email` varchar(255) NOT NULL,
  `empl_exp` float NOT NULL,
  `empl_gender` varchar(255) NOT NULL,
  `empl_location` varchar(255) NOT NULL,
  `empl_name` varchar(255) NOT NULL,
  `empl_pswd` varchar(255) NOT NULL,
  `empl_role` varchar(255) NOT NULL,
  `empl_uname` varchar(255) NOT NULL,
  `project_proj_id` int DEFAULT NULL,
  `project_manager_pmng_id` int DEFAULT NULL,
  `empl_team` int NOT NULL,
  `empl_salary` int NOT NULL,
  PRIMARY KEY (`empl_id`),
  KEY `FKs4axh26njci1xhj0lv31af1cq` (`project_proj_id`),
  KEY `FK1i5vw44sm51cvnbr8ur1npg83` (`project_manager_pmng_id`),
  CONSTRAINT `FK1i5vw44sm51cvnbr8ur1npg83` FOREIGN KEY (`project_manager_pmng_id`) REFERENCES `project_manager` (`pmng_id`),
  CONSTRAINT `FKs4axh26njci1xhj0lv31af1cq` FOREIGN KEY (`project_proj_id`) REFERENCES `project` (`proj_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Dhanbad','EMP001','98351223366','1990-05-03','nikhilksharma093@gmail.com',5,'Male','Dhanbad','Nikhil Sharma','$2a$10$Tk4xDFe.KHv6ueIF67skV.EK9YU4HEeKltqdkZGDVFDhhcvypg3ay','Support Team','nitishraj',1,1,0,50000),(2,'New Delhi','EMP002','9546314488','1985-12-15','apekshadhuttargaon@gmail.com',4,'Female','Mumbai','Apeksha','$10$Tk4xDFe.KHv6ueIF67skV.EK9YU4HEeKltqdkZGDVFDhhcvypg222','Business Analyst','apeksha',2,2,0,60000),(3,'Nellore','EMP003','7989564235','1992-09-20','manishamusti@gmail.com',1.5,'Female','Mumbai','Manisha','password3','Developer','manisha',3,3,0,70000),(4,'Dhanbad','EMP004','9835198351','1990-05-10','nitishrajrocks@gmail.com',1,'Male','Bangalore','Rahul Sharma','password4','Quality Assurance','rahulsharma',1,1,0,55000),(5,'Hyderabad','EMP005','9835155551','1990-05-10','amanshaw@gmail.com',1,'Male','Mumbai','Aman Shaw','password5','Full Stack Developer','amanshaw',6,2,0,80000),(6,'Mumbai','EMP006','919876543210','1990-12-12','hollywoodaudios@gmail.com',2,'Male','Mumbai','Sunil Singh','$2a$10$wvRfv7xDW.atgNQ8.CQZVegLE83naT3yZ4gnqqr.QE3wHn7LQCNZW','Developer','admin',2,1,2,600000);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_post`
--

DROP TABLE IF EXISTS `employee_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_post` (
  `epost_id` int NOT NULL AUTO_INCREMENT,
  `epost_category` varchar(255) NOT NULL,
  `epost_content` varchar(5000) NOT NULL,
  `epost_likes` int NOT NULL,
  `employee_empl_id` int DEFAULT NULL,
  PRIMARY KEY (`epost_id`),
  KEY `FKrecmjmat2vwpm0rsitgo5k3ey` (`employee_empl_id`),
  CONSTRAINT `FKrecmjmat2vwpm0rsitgo5k3ey` FOREIGN KEY (`employee_empl_id`) REFERENCES `employee` (`empl_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_post`
--

LOCK TABLES `employee_post` WRITE;
/*!40000 ALTER TABLE `employee_post` DISABLE KEYS */;
INSERT INTO `employee_post` VALUES (1,'Category 1','Post content 1',10,1),(2,'Category 2','Post content 2',20,2),(3,'Category 3','Post content 3',5,3),(4,'news feed','Hii This is my post',0,1),(5,'news feed','Posted by Employee2',0,2),(6,'news feed','Posted by Apeksha,,,,Good Morning',0,2),(7,'news feed','Good Evening by apeksha',0,2),(8,'news feed','hiiiiiiiiiiiiiiiiiiiiiiiiiiii',0,NULL),(9,'news feed','Hiiii',0,1),(10,'news feed','Hiii',0,1),(11,'news feed','hii',0,1),(12,'news feed','hiiiii',0,2),(13,'news feed','Good Morning',0,2),(14,'news feed','Good Morning',0,2),(15,'news feed','Hii ',0,2),(16,'news feed','',0,2),(17,'news feed','',0,2),(18,'news feed','fghfhf',0,2),(19,'news feed','hii',0,2),(20,'news feed','hiiiiii',0,2),(21,'news feed','hey',0,2),(23,'news feed','Hii',0,1),(24,'news feed','Hii Posted by Nitish as nikhilksharma093@gmail.com',0,1),(25,'news feed','This is a trial post which was posted on axis saral portal for testing purpose',0,1),(26,'news feed','This is another trial post after including BCC',0,1),(27,'news feed','Good Evening this was posted after changing email logo.',0,1),(28,'news feed','This is a Post to Mail',0,1),(29,'news feed','This is another',0,1),(30,'news feed','Hiii',0,2),(31,'news feed','Good Afternoon',0,2);
/*!40000 ALTER TABLE `employee_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_opportunities`
--

DROP TABLE IF EXISTS `job_opportunities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_opportunities` (
  `jopp_id` int NOT NULL AUTO_INCREMENT,
  `joop_vacancies` int NOT NULL,
  `jopp_desc` varchar(5000) NOT NULL,
  `jopp_exp` float NOT NULL,
  `jopp_location` varchar(255) NOT NULL,
  `jopp_name` varchar(255) NOT NULL,
  `jopp_shift` varchar(255) NOT NULL,
  `jopp_skills` varchar(255) NOT NULL,
  `jopp_slary` double NOT NULL,
  `jopp_team` int NOT NULL,
  `jopp_title` varchar(255) NOT NULL,
  `project_proj_id` int DEFAULT NULL,
  PRIMARY KEY (`jopp_id`),
  KEY `FKs9ohredw75rtgxbvv5is3ok4g` (`project_proj_id`),
  CONSTRAINT `FKs9ohredw75rtgxbvv5is3ok4g` FOREIGN KEY (`project_proj_id`) REFERENCES `project` (`proj_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_opportunities`
--

LOCK TABLES `job_opportunities` WRITE;
/*!40000 ALTER TABLE `job_opportunities` DISABLE KEYS */;
INSERT INTO `job_opportunities` VALUES (1,5,'Job Opportunity 1 Description',2,'Job Location1','Job Opportunity 1','Shift 1','Skills 1',50000,1,'Job Title 1',1),(2,3,'Job Opportunity 2 Description',3.5,'Job Location 2','Job Opportunity 2','Shift 2','Skills 2',60000,2,'Job Title 2',2),(3,2,'Job Opportunity 3 Description',1.5,'Job Location 3','Job Opportunity 3','Shift 3','Skills 3',70000,1,'Job Title 3',3),(4,4,'Job Opportunity 4 Description',2.5,'Job Location 4','Job Opportunity 4','Shift 4','Skills 4',80000,2,'Job Title 4',1),(5,2,'Job Opportunity 5 Description',1,'Job Location 5','Job Opportunity 5','Shift 5','Skills 5',90000,1,'Job Title 5',2),(6,3,'Job Opportunity 6 Description',3,'Job Location 6','Job Opportunity 6','Shift 6','Skills 6',100000,3,'Job Title 6',3);
/*!40000 ALTER TABLE `job_opportunities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts_response`
--

DROP TABLE IF EXISTS `posts_response`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts_response` (
  `postres_id` int NOT NULL AUTO_INCREMENT,
  `empl_name` varchar(255) DEFAULT NULL,
  `empl_role` varchar(255) DEFAULT NULL,
  `epost_content` varchar(255) DEFAULT NULL,
  `epost_id` int NOT NULL,
  PRIMARY KEY (`postres_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts_response`
--

LOCK TABLES `posts_response` WRITE;
/*!40000 ALTER TABLE `posts_response` DISABLE KEYS */;
INSERT INTO `posts_response` VALUES (1,'Employee 1','Role 1','Hii This is my post',4),(2,'Employee 2','Support Team','Posted by Employee2',5),(3,'Apeksha','Business Analyst','Posted by Apeksha,,,,Good Morning',6),(4,'Apeksha','Business Analyst','Good Evening by apeksha',7),(5,'Nitish Raj','Support Team','Hiiii',9),(6,'Nitish Raj','Support Team','Hiii',10),(7,'Nitish Raj','Support Team','hii',11),(8,'Apeksha','Business Analyst','hiiiii',12),(9,'Apeksha','Business Analyst','Good Morning',13),(10,'Apeksha','Business Analyst','Good Morning',14),(11,'Apeksha','Business Analyst','Hii ',15),(12,'Apeksha','Business Analyst','',16),(13,'Apeksha','Business Analyst','',17),(14,'Apeksha','Business Analyst','fghfhf',18),(15,'Apeksha','Business Analyst','hii',19),(16,'Apeksha','Business Analyst','hiiiiii',20),(17,'Apeksha','Business Analyst','hey',21),(18,'Updated','Developer','Hii This is My post',22),(19,'Nitish Raj','Support Team','Hii',23),(20,'Nitish Raj','Support Team','Hii Posted by Nitish as nikhilksharma093@gmail.com',24),(21,'Nitish Raj','Support Team','This is a trial post which was posted on axis saral portal for testing purpose',25),(22,'Nitish Raj','Support Team','This is another trial post after including BCC',26),(23,'Nikhil Sharma','Support Team','Good Evening this was posted after changing email logo.',27),(24,'Nikhil Sharma','Support Team','This is a Post to Mail',28),(25,'Nikhil Sharma','Support Team','This is another',29),(26,'Apeksha','Business Analyst','Hiii',30),(27,'Apeksha','Business Analyst','Good Afternoon',31);
/*!40000 ALTER TABLE `posts_response` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `proj_id` int NOT NULL AUTO_INCREMENT,
  `proj_code` varchar(255) NOT NULL,
  `proj_desc` varchar(255) NOT NULL,
  `proj_enddate` date NOT NULL,
  `proj_name` varchar(255) NOT NULL,
  `proj_startdate` date NOT NULL,
  `proj_status` varchar(255) NOT NULL,
  `department_dept_id` int DEFAULT NULL,
  `proj_owner_code` varchar(255) NOT NULL,
  `proj_owner_desc` varchar(5000) NOT NULL,
  `proj_owner_name` varchar(255) NOT NULL,
  PRIMARY KEY (`proj_id`),
  KEY `FK8guv6ayoifiyjbp3dmyyksffk` (`department_dept_id`),
  CONSTRAINT `FK8guv6ayoifiyjbp3dmyyksffk` FOREIGN KEY (`department_dept_id`) REFERENCES `department` (`dept_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'PROJ-1001','Software Bug Fixing is a critical aspect of software development and maintenance. It refers to the process of identifying, analyzing, and resolving defects or issues in software applications.','2023-12-31','Software Bug Fixing','2023-01-01','In Progress',1,'OWNER-0001','Tata Consultancy Services is an Indian multinational information technology services and consulting company with its headquarters in Mumbai, Maharashtra. It is a part of the Tata Group and operates in 150 locations across 46 countries. In July 2022, it was reported that TCS had over 600,000 employees worldwide.','Aarav Sharma'),(2,'PROJ-1002','Data Analysis and Reporting projects involve extracting, transforming, and analyzing large datasets to derive meaningful insights and facilitate informed decision-making within an organization.','2024-12-31','Data Analysis and Reporting','2023-02-25','Approved',2,'OWNER-0002','Axis Bank Limited, formerly known as UTI Bank, is an Indian banking and financial services company headquartered in Mumbai.','Aadhya Patel'),(3,'PROJ-1003','The E-commerce Website Development project aims to create a robust and user-friendly online platform for selling products and services.','2024-01-14','E-commerce Website Development','2021-01-14','In Planning',3,'OWNER-0003','The International Business Machines Corporation, nicknamed Big Blue, is an American multinational technology corporation headquartered in Armonk, New York','Aanya Singh'),(4,'PROJ-1004','The project aims to identify and address any potential defects, bugs, or performance issues before the software is released to end-users.','2023-11-01','Software Testing and Quality Assurance Enhancement','2023-01-01','Pending Approval',1,'OWNER-0004','Tata Consultancy Services is an Indian multinational information technology services and consulting company with its headquarters in Mumbai, Maharashtra. It is a part of the Tata Group and operates in 150 locations across 46 countries. In July 2022, it was reported that TCS had over 600,000 employees worldwide.','Aaradhya Kumar'),(5,'PROJ-1005',' It focuses on implementing state-of-the-art technologies and practices to support the evolving needs of the business and ensure a stable and secure IT environment','2023-10-20','IT Infrastructure Modernization','2023-01-01','Active',2,'OWNER-0005','Axis Bank Limited, formerly known as UTI Bank, is an Indian banking and financial services company headquartered in Mumbai.','Advaita Mishra'),(6,'PROJ-1006','The project aims to develop a cross-platform mobile app that allows users to easily create, track, and organize tasks, deadlines, and priorities.','2023-12-31','Mobile App Development for Task Management','2023-01-01','Active',3,'OWNER-0006','The International Business Machines Corporation, nicknamed Big Blue, is an American multinational technology corporation headquartered in Armonk, New York','Arjun Nair'),(7,'PROJ-1007','Software Bug Fixing is a critical aspect of software development and maintenance. It refers to the process of identifying, analyzing, and resolving defects or issues in software applications.','2023-12-31','Software Quality Improvement Initiative','2023-01-01','In Progress',2,'OWNER-0007','Tata Consultancy Services is an Indian multinational information technology services and consulting company with its headquarters in Mumbai, Maharashtra. It is a part of the Tata Group and operates in 150 locations across 46 countries. In July 2022, it was reported that TCS had over 600,000 employees worldwide.','Avni Gupta'),(8,'PROJ-1009','This project involves conducting comprehensive legal research to support upcoming litigations and provide valuable insights to the legal team.','2023-09-15','Legal Research Initiative','2023-07-16','In Planning',4,'OWNER-0008','Responsible for conducting legal research','Ananya Reddy'),(9,'PROJ-1009','In this project, we will be upgrading the entire IT infrastructure, including hardware and software components, to improve performance, security, and scalability.','2023-12-31','IT System Upgrade','2023-07-16','In Progress',2,'OWNER-0009','Responsible for managing IT infrastructure upgrade project','Aryan Verma'),(10,'PROJ-10010','The Legal Compliance Review project aims to conduct a thorough analysis of existing legal frameworks and policies to ensure compliance with industry regulations and standards.','2023-09-30','Legal Compliance Project','2023-07-16','Pending Approval',4,'OWNER-0010','Responsible for legal compliance review and documentation','Ayush Bhatia'),(11,'PROJ-10011','The HR Training Initiative project is designed to plan, organize, and deliver comprehensive employee training programs to enhance their skills, productivity, and job satisfaction.','2023-11-15','HR Training Initiative','2023-07-16','In Planning',1,'OWNER-0011','Responsible for organizing employee training sessions','Anika Yadav'),(12,'PROJ-10012','In this software development project, we will be adding several new features and functionalities to our existing application, meeting the demands of our growing user base.','2023-10-31','Software Feature Addition','2023-07-16','In Development',3,'OWNER-0012','Responsible for leading the development team','Ankit Srinivasan'),(13,'PROJ-10013','The IT Security Enhancement project focuses on identifying and implementing advanced security measures to protect our organization from potential cyber threats and data breaches.','2023-12-15','IT Security Improvement','2023-07-16','In Progress',2,'OWNER-0013','Responsible for enhancing IT security measures','Ayesha Menon'),(14,'PROJ-10014','The Legal Policy Update project involves revising and updating our company\'s legal policies to ensure alignment with the latest laws, regulations, and industry best practices.','2023-08-31','Legal Policy Revision','2023-07-16','Approved',4,'OWNER-0014','Responsible for updating legal policies','Aditya Chauhan'),(15,'PROJ-10015','The Employee Engagement Survey project aims to gather feedback from employees, understand their concerns, and create strategies to enhance overall employee satisfaction and retention.','2023-09-15','Employee Satisfaction Survey','2023-07-16','Data Collection',1,'OWNER-0015','Responsible for conducting employee engagement survey','Anjali Gupta');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_manager`
--

DROP TABLE IF EXISTS `project_manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_manager` (
  `pmng_id` int NOT NULL AUTO_INCREMENT,
  `pmng_contact` varchar(255) NOT NULL,
  `pmng_desg` varchar(255) NOT NULL,
  `pmng_email` varchar(255) NOT NULL,
  `pmng_exp` float NOT NULL,
  `pmng_name` varchar(255) NOT NULL,
  `pmng_salary` double NOT NULL,
  `project_proj_id` int NOT NULL,
  `pmng_propic` varchar(255) NOT NULL,
  `pmng_pswd` varchar(255) NOT NULL,
  `pmng_uname` varchar(255) NOT NULL,
  PRIMARY KEY (`pmng_id`),
  UNIQUE KEY `UK_od7b3d5dc85oj95oh8jy4v9tl` (`project_proj_id`),
  CONSTRAINT `FK3mcpfojdnkgfwn77yaaenvv4l` FOREIGN KEY (`project_proj_id`) REFERENCES `project` (`proj_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_manager`
--

LOCK TABLES `project_manager` WRITE;
/*!40000 ALTER TABLE `project_manager` DISABLE KEYS */;
INSERT INTO `project_manager` VALUES (1,'8989547412','Budget and Cost Control','manager1@example.com',5,'Anup Singh',100000,1,'','',''),(2,'7989632145','Project Tracking and Reporting','manager2@example.com',6,'Sunil Mittal',110000,2,'','',''),(3,'9835478962','Project Planning','manager3@example.com',7,'Akash Sharma',120000,3,'','',''),(10,'9835475689','Change Management','manager1@example.com',5,'Aditi Rao',100000,4,'','','');
/*!40000 ALTER TABLE `project_manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stake_holders`
--

DROP TABLE IF EXISTS `stake_holders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stake_holders` (
  `sthd_id` int NOT NULL AUTO_INCREMENT,
  `sthd_code` varchar(255) NOT NULL,
  `sthd_contact` varchar(255) NOT NULL,
  `sthd_desg` varchar(255) NOT NULL,
  `sthd_email` varchar(255) NOT NULL,
  `sthd_name` varchar(255) NOT NULL,
  `project_proj_id` int DEFAULT NULL,
  PRIMARY KEY (`sthd_id`),
  KEY `FKqrh8pqixh6vtgu6343dpcq6cp` (`project_proj_id`),
  CONSTRAINT `FKqrh8pqixh6vtgu6343dpcq6cp` FOREIGN KEY (`project_proj_id`) REFERENCES `project` (`proj_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stake_holders`
--

LOCK TABLES `stake_holders` WRITE;
/*!40000 ALTER TABLE `stake_holders` DISABLE KEYS */;
INSERT INTO `stake_holders` VALUES (1,'SH001','+1 369-369-7','Architect','john.doe@abctechnologies.com','John Doe',1),(2,'SH002','+7 5896-963-745','Business Analyst','jane.smith@abctechnologies.com','Jane Smith',1),(3,'SH003','+2 258-369-477','Scrum Master','michael.johnson@abctechnologies.com','Michael Johnson',1),(4,'SH004','+1 256-965-897','Tech Lead','emily.williams@abctechnologies.com','Emily Williams',1),(5,'SH005','+66 8956-693-4','Developer','daniel.moore@abctechnologies.com','Daniel Moore',1),(6,'SH006','Daniel Moore','Quality Assuarance','aditya@birlatechnologies.com','Rohit Singh',1),(7,'SH007','Stakeholder Contact 7','Test Lead','stakeholder7@example.com','Vijay Sodi',1),(8,'SH008','Stakeholder Contact 1','Stakeholder Designation 1','stakeholder1@example.com','Stakeholder 8',3),(9,'SH001','9595636323','Main Stakeholder','jio@example.com','Jio',2),(10,'SH008','Stakeholder Contact 8','Stakeholder Designation 8','stakeholder8@example.com','Stakeholder 8',1),(11,'SH009','Stakeholder Contact 8','Stakeholder Designation 8','stakeholder8@example.com','ICICI Bank Limited',1),(12,'SH012','+1 369-369-7','Manager','john.doe@abctechnologies.com','John H',1),(13,'sh00013','98653214785','Support','csnitishraj@gmail.com','abc',1),(14,'sh00013','98653214785','Support','csnitishraj@gmail.com','abc',1);
/*!40000 ALTER TABLE `stake_holders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-24 21:05:23
