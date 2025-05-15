
import sum1214 from '../sum1214.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 14 to equal 98 + offset 0.5052433546196785', (t) => {
  assert.strictEqual(sum1214(84, 14), 98 + 0.5052433546196785);
});
