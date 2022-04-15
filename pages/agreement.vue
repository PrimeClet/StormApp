<template>
<div>
    <div class="row mt-3">
      <div class="col-12 mt-3">
        <div class="container-lo">
          <b-container fluid>
            <b-row class="mb-3 d-none d-lg-block d-md-block d-xl-block d-flex justify-content-end">
              <b-col cols="4" md="4">
              </b-col>
              <b-col cols="7" class="ml-4 pl-5 d-flex justify-content-end" md="7">
                <select class="form-select form-select-lg mb-3" style="width: auto;" aria-label=".form-select-lg example">
                  <option selected>User Agreement</option>
                  <option value="1">Privacy Policy</option>
                  <option value="2">Content Policy</option>
                  <option value="3">Three</option>
                </select>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="4" class="pr-3 text-left text-md-right">
                <div class="position-relative text-12">
                  <b-list-group v-b-scrollspy:listgroup-ex>
                    <b-list-group-item href="#list-item-1" @click.stop="scrollInView($event)" class="border-0 text-18">Welcome </b-list-group-item>
                    <b-list-group-item href="#list-item-2" @click.stop="scrollInView($event)" class="border-0 text-18">Agreement</b-list-group-item>
                    <b-list-group-item href="#list-item-3" @click.stop="scrollInView($event)" class="border-0 text-18">Ownership & License</b-list-group-item>
                    <b-list-group-item href="#list-item-4" @click.stop="scrollInView($event)" class="border-0 text-18">Pricing and Payments</b-list-group-item>
                    <b-list-group-item href="#list-item-5" @click.stop="scrollInView($event)" class="border-0 text-18">Relationships with Readers</b-list-group-item>
                    <b-list-group-item href="#list-item-6" @click.stop="scrollInView($event)" class="border-0 text-18">Acceptable Use</b-list-group-item>
                    <b-list-group-item href="#list-item-7" @click.stop="scrollInView($event)" class="border-0 text-18">Limitation of Liability</b-list-group-item>
                    <b-list-group-item href="#list-item-8" @click.stop="scrollInView($event)" class="border-0 text-18">No Warranties</b-list-group-item>
                    <b-list-group-item href="#list-item-9" @click.stop="scrollInView($event)" class="border-0 text-18">Privacy Policy</b-list-group-item>
                    <b-list-group-item href="#list-item-10" @click.stop="scrollInView($event)" class="border-0 text-18">Terminating Your Account</b-list-group-item>
                    <b-list-group-item href="#list-item-11" @click.stop="scrollInView($event)" class="border-0 text-18">Changes to this Agreement</b-list-group-item>
                    <b-list-group-item href="#list-item-12" @click.stop="scrollInView($event)" class="border-0 text-18">Rules for your channel</b-list-group-item>
                    <b-list-group-item href="#list-item-13" @click.stop="scrollInView($event)" class="border-0 text-18">Miscellaneous Terms</b-list-group-item>
                  </b-list-group>
                  <br>
                  <select class="form-select mx-auto form-select-lg mb-3 float-md-right" style="width: auto;" aria-label=".form-select-lg example">
                    <option selected>Revisions</option>
                  </select>
                </div>
              </b-col>
              <b-row class="mb-3 mt-3 d-block d-md-none d-lg-none">
                <b-col cols="12" md="4">
                </b-col>
                <b-col cols="12" class="pl-5" md="7">
                  <select class="form-select mx-auto form-select-lg mb-3" style="width: auto;" aria-label=".form-select-lg example">
                    <option selected>Privacy Policy</option>
                    <option value="1">User Agreement</option>
                    <option value="2">Content Policy</option>
                    <option value="3">Three</option>
                  </select>
                </b-col>
              </b-row>
              <b-col cols="12" md="7" class="pl-5 text-justify">
                <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:800px">
                    <h5 id="list-item-1">Welcome </h5>
                        <p><strong>First of all, we are soooo Fishin&rsquo; excited!!!! You being here means you want to try Odaaay so thank you for giving us a chance. If you have any questions, please feel free to contact us at&nbsp;</strong><a href="mailto:hello@odaaay.com">hello@odaaay.com</a><span style="color:blue;text-decoration:underline;">,</span><strong>&nbsp;and don&rsquo;t forget we have so many upgrades planned for Odaaay so stay tuned to see what we envision Odaaay to be. Welcome and we appreciate you reading this.</strong></p>
                    <h5 id="list-item-2">Agreement </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>This Creator Agreement and Guidelines (&ldquo;Agreement&rdquo;) is a binding contract between you and&nbsp;Odaaay (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). It contains the rules, guidelines, and restrictions that govern your use of our services (referred to below simply as &ldquo;Odaaay&rdquo;) to distribute your content. If you use Odaaay for this purpose, you are a <strong>Creator</strong> (I wanted to use Odaaayian, unfortunately, my idea was rebuffed, some people cannot appreciate greatness). In this Agreement, we refer to people that subscribe to your channels as <strong>Subscribers</strong>.&nbsp;</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>Using Odaaay in any way means that you agree to this Agreement, and this Agreement will remain in effect while you use Odaaay. This Agreement includes everything in this document, as well as those in the Terms of Use, Privacy Policy, &nbsp;and all other rules and procedures that may be published from time to time by us. In the event of any conflict between this Agreement and any other terms and conditions you have agreed to with Odaaay, this Agreement will prevail concerning its subject matter.&nbsp;</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>You&nbsp;</span><span style='font-family:"Times New Roman",serif;'>state, assert</span><span style='font-family:"Times New Roman",serif;'>&nbsp;and confirm</span><span style='font-family:"Times New Roman",serif;'>&nbsp;</span><span style='font-family:"Times New Roman",serif;'>that you are of legal age to form a binding contract (or if not, that you&rsquo;ve received your parent&rsquo;s or guardian&rsquo;s permission to use&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>&nbsp;and that your parent or guardian agrees to this Agreement on your behalf).&nbsp;</span></p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>If you&rsquo;re agreeing to this Agreement on behalf of an organization or entity, you&nbsp;</span><span style='font-family:"Times New Roman",serif;'>state, assert</span><span style='font-family:"Times New Roman",serif;'>&nbsp;and&nbsp;</span><span style='font-family:"Times New Roman",serif;'>confirm</span><span style='font-family:"Times New Roman",serif;'>&nbsp;that you are authorized to agree to this Agreement on that organization or entity&rsquo;s behalf and bind them to these Terms&nbsp;</span><span style='font-family:"Times New Roman",serif;'>hence</span><span style='font-family:"Times New Roman",serif;'>, the references to &ldquo;you&rdquo; and &ldquo;your&rdquo; throughout this document refer to that organization or entity.</span></p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>If you don&rsquo;t agree to all of the following, you may not use or access Odaaay in any manner. If you have any questions, comments, or concerns regarding the Agreement or our products and services, please contact us at&nbsp;<a href="mailto:legal@odaaay.com">legal@odaaay.com</a>.</p>
                    <h5 id="list-item-3">Ownership & License </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>First and foremost, <strong>you own what you create</strong>. We tend to repeat ourselves, but we are not a publisher rather a platform.&nbsp;Any original content you post, upload, share, store, or otherwise provide to Odaaay&nbsp;by default&nbsp;remains yours and is protected by copyright and any other applicable intellectual property laws&nbsp;unless you choose a different license for your content in your account setting.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>However, please note that you agree to grant us a <strong>limited</strong> license to your content to enable us to operate Odaaay. <strong>This license allows us to promote your content and help you succeed on&nbsp;</strong><strong>Odaaay.&nbsp;</strong></p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>You agree that this limited license includes a worldwide, nonexclusive, sublicensable, royalty-free, fully paid-up, transferable right (a) to market your content and to permit others to use, and&nbsp;access, and download your content through Odaaay, and (b) to use your tradename(s), trademark(s), and logo(s) in connection with the distribution and marketing of newsletters. For further details on this license, please see &ldquo;License&rdquo; in the <a href="https://substack.com/tos">Terms of Use</a>, which is incorporated into this Agreement by reference.&nbsp;</p>
                    <h5 id="list-item-4">Pricing and Payments </h5>
                        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>You may offer your&nbsp;</span><span style='font-family:"Times New Roman",serif;'>content</span><span style='font-family:"Times New Roman",serif;'>&nbsp;for free, or for a subscription fee, to be determined at your discretion. You may set and change the prices for your newsletter at your discretion through your account, though no price changes will apply retroactively.&nbsp;</span></p>
                        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>If you choose to charge a subscription fee for your newsletter, you agree to the following:</span></p>
                        <ul style="margin-bottom:0cm;" type="disc">
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Circumvention: You agree to process payments from&nbsp;</span><strong><span style='font-family:"Times New Roman",serif;'>Subscribers</span></strong><span style='font-family:     "Times New Roman",serif;'>&nbsp;only in the manner determined by us. This includes using the third-party payment processing platform (&ldquo;Payment Processor&rdquo;) we choose, and following any other rules we specify. You may circumvent your payment obligations to us by soliciting payment from a&nbsp;</span><span style='font-family:     "Times New Roman",serif;'>Subscriber</span><span style='font-family:"Times New Roman",serif;'>&nbsp;outside of&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>&nbsp;or by using any alternative method to collect subscription payments. This includes receiving payments for your&nbsp;</span><span style='font-family:"Times New Roman",serif;'>content</span><span style='font-family:"Times New Roman",serif;'>&nbsp;through links to Paypal or a separate Patreon page.&nbsp;</span><span style='font-family:"Times New Roman",serif;'>All we say is go get your money you deserve it, we just trying to help you not exploit you, if you consider us helpful you then you won&rsquo;t need to circumvent your payment obligations.</span></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Taxes: You agree that you shall bear and be responsible for any and all applicable federal, state, local, and foreign taxes, duties, tariffs, levies, withholdings, and similar assessments (including without limitation, sales, use, and value-added taxes) related to your&nbsp;</span><span style='font-family:"Times New Roman",serif;'>content</span><strong><span style='font-family:"Times New Roman",serif;'>.</span></strong></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Revenue Share: You agree to pay us a percentage of the total amount charged by you to Subscribers (the &ldquo;Revenue Share&rdquo;). The remaining amount, after any fees deducted by the Payment Processor, will be retained by you. The Revenue Share percentage is set between you and&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>&nbsp;during&nbsp;</span><span style='font-family:"Times New Roman",serif;'>the&nbsp;</span><span style='font-family:"Times New Roman",serif;'>registration of your Publisher account.&nbsp;</span></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Revenue Share Payment: During the term of this Agreement, the Payment Processor will pay the Revenue Share owed to us and deduct any applicable fees on a rolling basis as you process subscription payments from Readers<strong>. You agree to these payments and further agree that all Revenue Share payments are non-refundable.</strong></span></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Information Upon Request: You will provide us with all requested data or information about you and your&nbsp;</span><span style='font-family:"Times New Roman",serif;'>content</span><span style='font-family:"Times New Roman",serif;'>. This includes all payment and tax identification information, and you will ensure this information is accurate and up-to-date. &nbsp;</span></li>
                        </ul>
                    <h5 id="list-item-5">Relationships with Readers </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>You agree to the following rules around your relationships with Subscribers and other users of Odaaay:</p>
                        <ul style="list-style-type: disc;margin-left:26px;">
                            <li>Sole Responsibility: You agree that you are solely responsible for (and that we have no responsibility to you or to any third party for) any content you distribute through Odaaay and for the consequences of your actions by doing so. This means that you acknowledge and agree that you are solely responsible for ensuring the distribution of your content, our actions under this Agreement are solely to assist you in facilitating distribution.&nbsp;</li>
                            <li>Stopping Publication or Deleting Content: You may delete one or more of your content/work from Odaaay at your discretion. <strong>However, please note that if you delete or stop publishing&nbsp;</strong><strong>content before the end of a paid subscription term of a&nbsp;</strong><strong>Subscriber, any and all obligations &ndash; including any refund obligations for the remaining portion of the subscription term &ndash; are solely your responsibility.</strong> We are under no obligation to issue any refunds to you or your Subscribers and we are entitled to keep any and all portions of any Revenue Share you have paid Odaaay.&nbsp;</li>
                            <li>Disputes: If there is a dispute between you and a user about payments or any other issue, you agree we are under no obligation to become involved and that we will not be held liable for any such dispute. We are not liable for your relationship with users, and we won&rsquo;t provide you with any legal advice regarding such matters.&nbsp;</li>
                            <li>Reporting a User: You can flag that a user that is violating our Terms of Use by sending an email to <a href="mailto:legal@odaaay.com">legal@odaaay.com</a>. After you provide us with written notice of this violation, we will determine whether this user&rsquo;s access to some or all of your newsletters should be suspended or terminated. We will also decide at our sole discretion whether this user&rsquo;s access to the rest of Odaaay will be suspended or terminated.&nbsp;</li>
                            <li>Support: You shall provide to us a current email address to which we may direct inquiries from Subscribers and other Odaaay users regarding your content.</li>
                        </ul>
                    <h5 id="list-item-6">Acceptable Use </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>Please review the &ldquo;Refraining from Certain Activities&rdquo; detailed in the Terms of Use, as those rules are also incorporated into this Agreement by reference.&nbsp;</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>You are responsible for all your activity in connection with Odaaay!</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>Make sure that you use Odaaay in a manner that complies with the law and is permitted by this Agreement. If your use of Odaaay is prohibited by applicable laws, then you aren&rsquo;t authorized to use Odaaay. We can&rsquo;t and won&rsquo;t be responsible for you using Odaaay in a way that breaks the law.</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>You also represent and warrant that you will not publish newsletters or otherwise use Odaaay in a manner that:</p>
                        <ul style="list-style-type: disc;margin-left:26px;">
                            <li>is harmful, fraudulent, deceptive, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, objectionable, or in any way violates Odaaay&rsquo;s policies;</li>
                            <li>interferes with, disrupts, damages, or accesses in an unauthorized manner the devices, servers, networks, or other properties or services of Odaaay or any third party;</li>
                            <li>infringes, violates, or misappropriates any law, statute, ordinance or regulation or rights of any third party;</li>
                            <li>spreads a virus, trojan horse, worm, time bomb, or other harmful computer code, file, or program.</li>
                        </ul>
                    <h5 id="list-item-7">Limitation of Liability </h5>
                        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Times New Roman",serif;'>To the fullest extent allowed by applicable law, under no circumstances</span></strong><strong><span style='font-family:"Times New Roman",serif;'>,</span></strong><strong><span style='font-family:"Times New Roman",serif;'>&nbsp;and under no legal theory shall&nbsp;</span></strong><strong><span style='font-family:"Times New Roman",serif;'>Odaaay</span></strong><strong><span style='font-family:"Times New Roman",serif;'>, its licensors, or its suppliers be liable to you or to any other person for:</span></strong></p>
                        <ul style="margin-bottom:0cm;" type="disc">
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Times New Roman",serif;'>Any indirect, special, incidental, or consequential damages of any kind, or</span></strong></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Times New Roman",serif;'>Any amount, in the aggregate, in excess of the greater of (1) $10 or (2) the amounts paid and/or payable by you to us in connection with&nbsp;</span></strong><strong><span style='font-family:"Times New Roman",serif;'>Odaaay</span></strong><strong><span style='font-family:"Times New Roman",serif;'>&nbsp;in the twelve mont</span></strong><strong><span style='font-family:"Times New Roman",serif;'>hs</span></strong><strong><span style='font-family:"Times New Roman",serif;'>&nbsp;preceding the applicable claim.&nbsp;</span></strong></li>
                        </ul>
                    <h5 id="list-item-8">No Warranties </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'><strong>Odaaay is provided to you on an &ldquo;as-is&rdquo; basis. This means we provide it to you without any express or implied warranties of any kind. That includes any implied warranties of merchantability, warranties of fitness for a particular purpose, non-infringement, or any warranty that the use of Odaaay will be uninterrupted or error-free.&nbsp;</strong></p>
                    <h5 id="list-item-9">Privacy Policy </h5>
                        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>We</span><span style='font-family:"Times New Roman",serif;'>&nbsp;take privacy very seriously&nbsp;</span><span style='font-family:"Times New Roman",serif;'>not like other companies that tend to create profiles of you and sell those profiles for some cash. We are</span><span style='font-family:"Times New Roman",serif;'>&nbsp;committed to processing your personally identifiable information and that of your&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Subscribers</span><span style='font-family:"Times New Roman",serif;'>&nbsp;(&ldquo;Personal Information&rdquo;) in accordance with applicable privacy and data protection law. For more information on how we process Personal Information please see our Privacy Policy.</span></p>
                        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Consistent with our Privacy Policy, we may collect certain data on how&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Subscribers</span><span style='font-family:"Times New Roman",serif;'>&nbsp;engage with&nbsp;</span><span style='font-family:"Times New Roman",serif;'>content</span><span style='font-family:"Times New Roman",serif;'>. We will share, at our sole discretion, some of this information with you</span><span style='font-family:"Times New Roman",serif;'>.&nbsp;</span><span style='font-family:"Times New Roman",serif;'>You agree that&nbsp;</span><span style='font-family:"Times New Roman",serif;'>we are</span><span style='font-family:"Times New Roman",serif;'>&nbsp;under no obligation to share this data with you.</span><span style='font-family:"Times New Roman",serif;'>&nbsp;</span></p>
                        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Please note that our Privacy Policy only applies to our processing of Personal Information as a data controller or as a business as defined in the California Consumer Privacy Act of 2018 &mdash; these are largely cases where we process Personal Information for our purposes. Where Odaaay processes Personal Information on your behalf as a publisher, Odaaay qualifies as a data processor and/or service provider and you qualify as a data controller. Where we act as a data processor, the following terms apply:&nbsp;</span></p>
                        <ul style="margin-bottom:0cm;" type="disc">
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Each party shall comply with their respective statutory or regulatory data protection obligations.</span></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Odaaay shall process Personal Information in accordance with your instructions. Odaaay shall have no liability whatsoever for violations of privacy and data protection laws that arise as a result of Odaaay following your instructions under the Agreement.</span></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Odaaay shall not retain, use, or disclose the Personal Information it receives as a service provider for any purpose other than performing its obligations to you under this Publisher Agreement, however, we may disclose Personal Information as required by law and we may use our own service providers to process Personal Information subject to the same restrictions on retention, use, and disclosure provided here.</span></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>If you collect, use, store or otherwise process Personal Information provided by or collected from Odaaay users, you must do so securely and only for as long as it is needed and always in accordance with applicable privacy and data protection laws.&nbsp;</span></li>
                            <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>You shall ensure that all Personal Information that you supply or disclose to Odaaay has been obtained fairly and lawfully and that you have obtained all necessary consents and/or privacy notices required to permit Odaaay to fulfill its obligations under this Agreement.&nbsp;</span></li>
                        </ul>
                    <h5 id="list-item-10">Terminating Your Account </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>Neither party may terminate this Agreement at any time for any reason. Upon such termination of this Agreement, your right to use Odaaay and its services will immediately cease. &nbsp;</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>We may terminate this Agreement or terminate, suspend, or restrict your access to or use of Odaaay at any time, for any reason. Reasons that may lead to us terminating or restricting access to Odaaay include a breach of any of the terms or conditions of this Agreement, your offensive or unacceptable behavior, objectionable material, or any other actions in violation of guidelines we specify. We will notify Creators as soon as reasonably practicable if Creators&rsquo; access to Odaaay is suspended or substantially limited due to technical problems with the platform.&nbsp;</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>You agree that this means that content (or any content therein) may be removed from Odaaay at any time at our discretion. &nbsp;You also agree that we retain the right to immediately halt the distribution of your content at our discretion.&nbsp;</p>
                    <h5 id="list-item-11">Changes to this Agreement </h5>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>We are constantly trying to improve our products and services, so this Agreement may need to change along with Odaaay. &nbsp;We reserve the right to change the Agreement at any time, but if we do, we will bring it to your attention by placing a notice on the website, or by some other means.&nbsp;</p>
                        <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri",sans-serif;margin:0cm;text-align:justify;'>If you don&rsquo;t agree with the new Agreement, you are free to reject it; unfortunately, that means you will no longer be able to use Odaaay. &nbsp;If you use Odaaay in any way after a change to the Agreement is effective and notice has been provided, that means you agree to all of the changes. Except for changes by us as described here, no other amendment or modification of this Agreement will be effective unless in writing and signed by both you and us.&nbsp;</p>
                    <h5 id="list-item-12">Rules for your channel </h5>
                    <ul style="list-style-type: disc;">
                        <li><span style='font-family:"Times New Roman",serif;'>Please describe what your&nbsp;</span><span style='font-family:"Times New Roman",serif;'>channel</span><span style='font-family:"Times New Roman",serif;'>&nbsp;is so that all users can find what they are looking for on the site.</span><span style='font-family:"Times New Roman",serif;'>&nbsp;Putting a picture for your channel is highly recommended.</span></li>
                        <li><span style='font-family:"Times New Roman",serif;'>Channels should have</span><span style='font-family:"Times New Roman",serif;'>&nbsp;clear, concise, and consistent guidelines for participation. These guidelines are flexible enough to allow for some deviation and are updated when needed.&nbsp;</span></li>
                    </ul>
                    <ul style="list-style-type: disc;">
                        <li>You are obligated to comply with our&nbsp;Content Policy&nbsp;and other policies</li>
                        <li>We love that so many of you want to talk about brands and provide a forum for discussion. Remember to always flag your community as &ldquo;unofficial&rdquo; and be clear in your community description that you don&rsquo;t represent that brand.</li>
                    </ul>
                    <h5 id="list-item-13">Miscellaneous Terms </h5>
                    <ul style="list-style-type: disc;">
                        <li><span style='font-family:"Times New Roman",serif;'>The above covers most of the questions that we typically receive about&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>. We have grouped provisions that come up less frequently below:</span>
                            <ul style="margin-bottom:0cm;" type="disc">
                                <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Indemnification: To the fullest extent allowed by applicable law, you agree to indemnify and hold&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>, its affiliates, officers, agents, employees, and partners harmless from and against any and all claims, liabilities, damages (actual and consequential), losses</span><span style='font-family:"Times New Roman",serif;'>,</span><span style='font-family:"Times New Roman",serif;'>&nbsp;and expenses (including attorneys&rsquo; fees) arising from or in any way related to any third party claims relating to (a) your use of Odaaay (including any actions taken by a third party using your account), and (b) your violation of these Terms. &nbsp;In the event of such a claim, suit, or action, we will attempt to provide notice to the contact information we have for your account (provided that failure to deliver such notice shall not eliminate or reduce your indemnification obligations hereunder).</span></li>
                                <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Assignment: You may not assign, delegate or transfer these Terms or your rights or obligations hereunder, or your&nbsp;</span><span style='font-family:     "Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>&nbsp;account, in any way (by operation of law or otherwise) without our prior written consent. &nbsp;We may transfer, assign, or delegate these Terms and our rights and obligations without consent.</span></li>
                                <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Choice of Law: These Terms are governed by and will be construed under applicable law and the laws of&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Buea</span><span style='font-family:"Times New Roman",serif;'>, without regard to the conflicts of laws provisions thereof.</span></li>
                                <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Arbitration and Class Action Waiver: Any dispute arising from or relating to the subject matter of these Terms shall be finally settled by arbitration in&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Yaounde</span><span style='font-family:"Times New Roman",serif;'>,&nbsp;</span><span style='font-family:"Times New Roman",serif;'>by</span><span style='font-family:"Times New Roman",serif;'>&nbsp;the Streamlined Arbitration Rules and Procedures of Judicial Arbitration and Mediation Services, Inc. (&ldquo;JAMS&rdquo;) then in effect, by one commercial arbitrator with substantial experience in resolving intellectual property and commercial contract disputes, who shall be selected from the appropriate list of&nbsp;</span><span style='font-family:"Times New Roman",serif;'>personal</span><span style='font-family:"Times New Roman",serif;'>&nbsp;arbitrators&nbsp;</span><span style='font-family:"Times New Roman",serif;'>by</span><span style='font-family:"Times New Roman",serif;'>&nbsp;the Streamlined Arbitration Rules and Procedures of JAMS. Judgment upon the award so rendered may be entered in a court having jurisdiction, or application may be made to such court for judicial acceptance of any award and an order of enforcement, as the case may be. Notwithstanding the foregoing, you and Odaaay shall have the right to institute an action in a court of proper jurisdiction for injunctive or other equitable relief pending a final decision by the arbitrator. &nbsp;For all purposes of these Terms, you consent to exclusive jurisdiction and venue in the state or federal courts located in, respectively, San Francisco County, California, or the Northern District of California. The prevailing party in any action or proceeding arising out of these Terms will be entitled to an award of costs and attorneys&rsquo; fees. To the fullest extent permitted by law, you and Odaaay Inc agree that all claims against the other can only be brought in an individual capacity, and not as a plaintiff or class member in any purported class, consolidated, or other representative proceedin</span><span style='font-family:"Times New Roman",serif;'>gs</span><span style='font-family:"Times New Roman",serif;'>. We agree that arbitrators may not conduct any class, consolidated, or representative proceeding, and are limited to providing relief warranted by an individual party&apos;s claim.</span></li>
                                <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>No Third-Party Beneficiaries: We agree there are no third-party beneficiaries intended under these Terms.</span></li>
                                <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>No Joint Venture: You hereby acknowledge and agree that you are not an employee, agent, partner, or joint venture of&nbsp;</span><span style='font-family:"Times New Roman",serif;'>Odaaay</span><span style='font-family:"Times New Roman",serif;'>., and you do not have any authority of any kind to bind us in any respect whatsoever.&nbsp;</span></li>
                                <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Waiver: The failure of either you or us to exercise, in any way, any right herein shall not be deemed a waiver of any further rights hereunder. &nbsp;</span></li>
                                <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Severability: If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated, to the minimum extent necessary, so that these Terms shall otherwise remain in full force and effect and enforceable. &nbsp;</span></li>
                                <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Times New Roman",serif;'>Entire Agreement: You agree that these Terms are the complete and exclusive statement of the mutual understanding between you and us and that it supersedes and cancels all previous written and oral agreements, communications</span><span style='font-family:"Times New Roman",serif;'>,</span><span style='font-family:"Times New Roman",serif;'>&nbsp;and other understandings relating to the subject matter of these Terms. &nbsp;</span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "agreement",
  data() {
    return {
      offset: {top: 10, bottom: 20}
    }
  },
  methods: {
    onActivate(target) {
      console.log('Receved Event: scrollspy::activate for target ', target);
    },
    scrollInView($event) {
      let href = $event.target.getAttribute('href')
      if (href) {
        let el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    }
  },
  created() {
    this.$root.$on('scrollspy::activate', this.onActivate);
  }
}
</script>

<style scoped>

.parallax {
  /* The image used */
  background-color: #ffc107;
  background-image: url('https://www.redditinc.com/assets/images/site/planet-06.svg'), url("https://www.redditinc.com/assets/images/site/wave-05.png");
  transform: translate3d(0px, 0px, 0px);
  /* Full height */
  height: 136px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: right bottom, center;
  background-repeat: no-repeat;
  background-size: contain;
}
.container-lo {
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1060px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

#two-columns {
  padding-bottom: 86px;
}
#two-columns {
  padding-bottom: 64px;
  padding-top: 18px;
}

.list-group-item.list-group-item-action.active::after {
  font-family: "Font Awesome 5 Free";
  content: "\f0d9";
  display: inline-block;
  padding-bottom: 2px;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  padding-left: 10px;
}
.list-group-item.list-group-item-action.active {
  font-weight: bolder !important;
}

list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: none;
  font-size: large !important;
}


</style>
 