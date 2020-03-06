import * as React from 'react'
import App from 'next/app'
import Head from 'next/head'
import Layout from "../components/common/Layout"
import '../styles/main.css';

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>App</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
