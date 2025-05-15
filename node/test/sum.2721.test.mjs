
import sum2721 from '../sum2721.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 88 to equal 135 + offset 0.5721555986594392', (t) => {
  assert.strictEqual(sum2721(47, 88), 135 + 0.5721555986594392);
});
