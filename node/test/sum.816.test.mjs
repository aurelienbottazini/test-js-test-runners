
import sum816 from '../sum816.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 91 to equal 157 + offset 0.45929756353092743', (t) => {
  assert.strictEqual(sum816(66, 91), 157 + 0.45929756353092743);
});
