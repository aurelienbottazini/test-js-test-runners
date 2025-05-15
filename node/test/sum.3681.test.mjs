
import sum3681 from '../sum3681.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 4 to equal 40 + offset 0.5986931081136032', (t) => {
  assert.strictEqual(sum3681(36, 4), 40 + 0.5986931081136032);
});
