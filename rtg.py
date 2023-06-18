import discord
from discord.ext.commands import *
from discord import app_commands
#import os,asyncio,youtube_dl
#import calculator

"""def edit(a):
    b=""
    i=0
    while i<len(a):
        if a[i]=='+':b=b+" + "
        elif a[i]=='-':b=b+" - "
        else: b=b+ a[i]
        i+=1
    return b

"""
#from calculator.simple import SimpleCalculator
block_words=["peepee","poopoo","http://","https://"]
bot = Bot(command_prefix="!", intents=discord.Intents.all())

token='MTAyODY3MzY5NTI1MTY5Nzc3NA.GuYoaO.n48c1ej8nRhiInlBmfe-kAXYmMCTbCNPxhxho8'
ch1="`"*3
@bot.command()
async def id(ctx, user:discord.Member):
    await ctx.reply(user.id)
#off bot
@bot.command()
async def offBot(ctx):
    exit()
#@bot.slash_command(description="off bot")
#async def off(ctx):
#    await ctx.respond('off')
#    exit()
@bot.command(descripton="Get Avatar")
async def avatar(ctx, user: discord.Member):
    embed = discord.Embed(title=f"{user.name}'s Avatar")
    embed.set_image(url=user.avatar)
    embed.set_footer(text=f"Require By {ctx.author}")
    await ctx.reply(embed=embed, delete_after=10)
@bot.command()
async def showcode(ctx):
    codeF=open('rtg.py','r',encoding='UTF-8')
    code=codeF.read()
    await ctx.reply(f"""{ch1}python
{code}
{ch1}""")
@bot.command()
async def w(ctx,s):
    embedVar = discord.Embed(title=s, description=s, color=0x00ff00)
    embedVar.add_field(name=s, value=s, inline=False)
    await ctx.reply(embed=embedVar)
@bot.command()
async def oxi(ctx):
    embed = discord.Embed(title="oxi",description="nguyen to hoahoc")
    embed.add_field(name="proton", value="6", inline=True)
    embed.add_field(name="đvC", value="16", inline=True)
    await ctx.reply(embed=embed)
@bot.command()
async def flo(ctx):
    floB = discord.Embed(title="Flo",description="nguyen to hoahoc")                                                        
    floB.add_field(name="proton", value="9", inline=True)
    floB.add_field(name="đvC", value="19", inline=True)
    await ctx.reply(embed=floB)
"""@bot.command()
async def calc(ctx,c):
    a = SimpleCalculator()
    a.run(edit(c))
    await ctx.send(str(a.lcd))
"""
bot.run(token)

