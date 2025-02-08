import express from 'express';
import bodyParser from 'body-parser';

const app=express();
const port=3000;
let titles=[];
let discription=[];
let data=[];
let i=7;
let content;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
    res.render("index",
        {titles:titles,
            dis:discription,
            title:titles[0],
            content:data[0]
        }
    );
});

app.get('/home',(req,res)=>{
    res.render("index",
        {titles:titles,
            dis:discription,
            title:titles[0],
            content:data[0]
        }
    );
});

app.get('/new',(req,res)=>{
    res.render("new");
});
app.post('/done',(req,res)=>{
    const title = req.body.title;
  const disc = req.body.description;
  const dataa=req.body.data;
    const idx=req.body.index;
  if(idx!=undefined){
      let inx=req.body.index;
      titles[idx]=title;
      discription[idx]=disc;
      data[idx]=dataa;
  }else{

      if(title!=""){
    
          titles.push(title);
          discription.push(disc);
          data.push(dataa);
      }
  }
 
    // console.log(req.body["title"]);
    res.render("index",
        {titles:titles,
            dis:discription,
            title:titles[0],
            content:data[0]
        }
    );
})
app.post('/edit', (req, res) => {
    const index = req.body.idxx;
    res.render("edit", {
        title:titles,
        dis:discription,
        content:data,
        index: index // pass index to update the correct post later
    });
});

app.post('/delete',(req,res)=>{
    const index = req.body.index;
titles = titles.slice(0, index).concat(titles.slice(index + 1));
discription = discription.slice(0, index).concat(discription.slice(index + 1));
data = data.slice(0, index).concat(data.slice(index + 1));
   
    res.render("index",
        {titles:titles,
            dis:discription,
            title:titles[0],
            content:data[0]}
    )
})

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
});

app.post("/clicked",(req,res)=>{
    const idx=req.body.index;
    // console.log(idx);
    let heading=titles[idx];
     let content=data[idx];
     res.render("index",
        {
            titles:titles,
            dis:discription,
            title:heading,
            content:content
        }
     )
})





app.listen(3000,()=>{
    console.log("server started at port 3000");
})
titles[0]="Tech & Innovation";
titles[1]="Lifestyle & Self-Improvement";
titles[2]="Travel & Adventure";
titles[3]="Health & Wellness";
titles[4]="Productivity & Career";
titles[5]="Creative & Hobbies";
titles[6]="Pop Culture & Fun";

discription[0]="10 Future Technologies That Will Change Our Lives by 2030";
discription[1]="Minimalism 101: Declutter Your Life and Find Joy in Less";
discription[2]="Hidden Gems: 7 Underrated European Cities You Must Visit";
discription[3]="Yoga for Beginners: 10 Poses to Kickstart Your Practice";
discription[4]="Remote Work Burnout: How to Stay Productive Without Losing Your Mind";
discription[5]="DIY Home Décor: 10 Pinterest-Worthy Projects Under $20";
discription[6]="The Rise of K-Dramas: Why the World Is Obsessed";

data[0]="Living a balanced lifestyle is key to self-improvement. Start by setting small, achievable goals that align with your values—whether it’s adopting healthier habits, learning a new skill, or managing stress better. Prioritize self-care, like getting enough sleep, eating nourishing foods, and staying active. Surround yourself with positive influences and practice gratitude daily to shift your mindset. Remember, self-improvement is a journey, not a destination. Celebrate progress, embrace setbacks as learning opportunities, and keep moving forward. Small, consistent changes lead to lasting growth and a more fulfilling life."
data[1]="Lifestyle and self-improvement go hand in hand, shaping the way we live and grow. It’s about making intentional choices that enhance your well-being, from adopting healthy routines to nurturing a positive mindset. Start by identifying areas you’d like to improve—whether it’s fitness, productivity, or mental health—and take small, consistent steps toward your goals. Embrace habits like mindfulness, regular exercise, and continuous learning to fuel personal growth. Remember, self-improvement isn’t about perfection; it’s about progress. Celebrate your wins, learn from setbacks, and stay committed to becoming the best version of yourself. A fulfilling life begins with the choices you make today.";
data[2]="Travel and adventure are more than just experiences—they’re opportunities to grow, explore, and connect with the world. Stepping out of your comfort zone, whether it’s hiking a remote trail, immersing yourself in a new culture, or simply wandering through an unfamiliar city, can ignite a sense of wonder and perspective. Adventure doesn’t have to mean extreme; it’s about embracing the unknown and finding joy in discovery. Travel teaches resilience, adaptability, and gratitude, while creating memories that last a lifetime. So pack your bags, chase new horizons, and let the journey transform you. After all, the world is vast, and every trip is a chance to write your own story.";
data[3]="Health and wellness are the foundation of a vibrant, fulfilling life. It’s about nurturing your body, mind, and spirit through balanced choices—eating nourishing foods, staying active, and prioritizing rest. Mental health is just as important; practice mindfulness, manage stress, and seek joy in everyday moments. Small, consistent habits, like drinking more water, taking walks, or unplugging from screens, can make a big difference. Remember, wellness isn’t about perfection but progress. Listen to your body, celebrate small wins, and create a lifestyle that supports your overall well-being. When you invest in your health, you’re building a stronger, happier version of yourself.";
data[4]="Productivity and career growth thrive on intentional habits and a clear sense of purpose. Start by setting specific, achievable goals and breaking them into manageable steps. Prioritize tasks using tools like to-do lists or time-blocking, and focus on high-impact activities that align with your long-term vision. Embrace continuous learning—whether through courses, mentorship, or self-study—to stay ahead in your field. Balance is key; avoid burnout by taking breaks, setting boundaries, and maintaining a healthy work-life rhythm. Remember, success isn’t just about working harder but working smarter. Stay consistent, adapt to challenges, and let your passion drive you toward a fulfilling and impactful career.";
data[5]="Creativity and hobbies are essential outlets for self-expression and joy. Whether it’s painting, writing, gardening, or playing an instrument, engaging in creative activities allows you to unwind, explore new ideas, and connect with your inner self. Hobbies aren’t just pastimes—they’re opportunities to learn, grow, and find fulfillment outside of daily routines. Don’t worry about being perfect; the goal is to enjoy the process and let your imagination flow. Carve out time in your schedule to nurture these passions, even if it’s just a few minutes a day. Embracing creativity and hobbies can spark inspiration, reduce stress, and add a vibrant layer of meaning to your life.";
data[6]="Pop culture and fun are the heartbeat of modern life, offering a shared language of entertainment, trends, and connection. From binge-watching the latest series to debating the hottest memes or dancing to viral TikTok challenges, pop culture keeps us plugged into the world’s pulse. It’s a space where creativity and humor collide, giving us moments of escape and joy. Whether you’re a movie buff, a music lover, or a gaming enthusiast, there’s something for everyone to enjoy. So, embrace the fun, stay curious, and let pop culture remind you that life doesn’t always have to be serious—sometimes, it’s okay to just laugh, dance, and geek out.";
