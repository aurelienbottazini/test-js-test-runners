
import sum1085 from '../sum1085.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 45 to equal 69 + offset 0.7017202374755791', (t) => {
  assert.strictEqual(sum1085(24, 45), 69 + 0.7017202374755791);
});
