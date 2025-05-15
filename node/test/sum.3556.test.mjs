
import sum3556 from '../sum3556.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 97 to equal 174 + offset 0.5776471712095037', (t) => {
  assert.strictEqual(sum3556(77, 97), 174 + 0.5776471712095037);
});
