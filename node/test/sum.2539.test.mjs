
import sum2539 from '../sum2539.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 26 to equal 42 + offset 0.6552176249262284', (t) => {
  assert.strictEqual(sum2539(16, 26), 42 + 0.6552176249262284);
});
