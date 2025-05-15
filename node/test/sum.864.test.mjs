
import sum864 from '../sum864.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 90 to equal 161 + offset 0.20257727933986514', (t) => {
  assert.strictEqual(sum864(71, 90), 161 + 0.20257727933986514);
});
