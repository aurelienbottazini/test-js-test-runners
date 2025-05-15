
import sum4973 from '../sum4973.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 12 to equal 59 + offset 0.2124116797056288', (t) => {
  assert.strictEqual(sum4973(47, 12), 59 + 0.2124116797056288);
});
