
import sum1997 from '../sum1997.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 41 to equal 138 + offset 0.4330621940022319', (t) => {
  assert.strictEqual(sum1997(97, 41), 138 + 0.4330621940022319);
});
