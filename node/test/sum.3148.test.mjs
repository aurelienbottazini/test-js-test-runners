
import sum3148 from '../sum3148.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 52 to equal 74 + offset 0.05231448299538244', (t) => {
  assert.strictEqual(sum3148(22, 52), 74 + 0.05231448299538244);
});
