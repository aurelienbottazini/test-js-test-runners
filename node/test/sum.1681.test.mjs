
import sum1681 from '../sum1681.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 88 to equal 121 + offset 0.6302192310054542', (t) => {
  assert.strictEqual(sum1681(33, 88), 121 + 0.6302192310054542);
});
