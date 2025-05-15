
import sum2360 from '../sum2360.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 25 to equal 121 + offset 0.3690189016540738', (t) => {
  assert.strictEqual(sum2360(96, 25), 121 + 0.3690189016540738);
});
