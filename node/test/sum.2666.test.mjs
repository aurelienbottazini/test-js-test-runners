
import sum2666 from '../sum2666.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 38 to equal 91 + offset 0.2721124510426458', (t) => {
  assert.strictEqual(sum2666(53, 38), 91 + 0.2721124510426458);
});
