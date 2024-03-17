import { StaticImageData } from 'next/image'
import { GalleryItem, Orientation, Position } from '@/app/components/ImageGallery/ImageGallery'
import { Testimonial } from '@/app/types/TestimonialsTypes'

export enum LinkTarget {
  newTab = '_blank',
  currentTab = '_self'
}

export type TechnologyStack = 'activemq'
| 'angular'
| 'apache-camel'
| 'aws'
| 'aws-cloud-watch'
| 'aws-dynamodb'
| 'aws-ec2'
| 'aws-elastic-beanstalk'
| 'aws-lambda'
| 'aws-rds'
| 'aws-s3'
| 'aws-sns'
| 'aws-sqs'
| 'aws-vps'
| 'bootstrap'
| 'cassandra'
| 'digital-ocean'
| 'docker'
| 'firebase'
| 'gcp'
| 'github'
| 'github-actions'
| 'gradle'
| 'hibernate'
| 'influxdb'
| 'java'
| 'jenkins'
| 'jquery'
| 'kafka'
| 'kubernetes'
| 'maven'
| 'mongodb'
| 'mssql'
| 'mysql'
| 'native-script'
| 'neo4j'
| 'next'
| 'oracle'
| 'postgresql'
| 'python'
| 'rabbitmq'
| 'react'
| 'redis'
| 'redux'
| 'sonarqube'
| 'spring'
| 'tailwind'
| 'typescript'
| 'vue'

export type TechnologyStackDescriptionKeys = 'Backend' | 'Web' | 'Tools' | 'Infrastructure' | 'Cryptocurrency Exchanges' | 'Integrated APIs' | 'IoT device'

export type TechnologyStackDescription = {
  [index in TechnologyStackDescriptionKeys]?: string[]
}

export interface Gallery {
  gallery: GalleryItem[],
  width?: string,
  height?: number,
  orientation?: Orientation,
  position?: Position,
  gap?: number,
  imageBorderRadius?: number,
  preview?: boolean
}

export interface ShowcaseContent {
  header: {
    title: string,
    description: string
  },
  features: string[],
  summary: string,
  technologyStack: TechnologyStack[],
  technologyStackDescription: TechnologyStackDescription,
  galleries?: Gallery[],
  testimonials?: Testimonial
}

export interface Showcase {
  title: string,
  description: string,
  linkEnabled: boolean,
  linkTarget: LinkTarget.newTab | LinkTarget.currentTab,
  link: string,
  tags: string[],
  imageSrc: string | StaticImageData,
  alt: string,
  separatePageConfigs: {
    pagePresent: boolean,
    headerPresent: boolean,
    featuresPresent: boolean,
    summaryPresent: boolean,
    technologyStackPresent: boolean,
    technologyStackDescriptionPresent: boolean,
    galleriesPresent: boolean,
    testimonialsPresent: boolean,
    linkPreviewSrc: string,
    content?: ShowcaseContent
  }
}