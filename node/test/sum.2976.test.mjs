
import sum2976 from '../sum2976.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 69 to equal 131 + offset 0.7219799365380181', (t) => {
  assert.strictEqual(sum2976(62, 69), 131 + 0.7219799365380181);
});
