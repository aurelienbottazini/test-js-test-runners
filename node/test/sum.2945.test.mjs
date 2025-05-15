
import sum2945 from '../sum2945.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 78 to equal 88 + offset 0.8918365495012108', (t) => {
  assert.strictEqual(sum2945(10, 78), 88 + 0.8918365495012108);
});
