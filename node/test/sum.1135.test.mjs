
import sum1135 from '../sum1135.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 4 to equal 88 + offset 0.7489303820589309', (t) => {
  assert.strictEqual(sum1135(84, 4), 88 + 0.7489303820589309);
});
