
import sum279 from '../sum279.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 41 to equal 54 + offset 0.911087230317275', (t) => {
  assert.strictEqual(sum279(13, 41), 54 + 0.911087230317275);
});
