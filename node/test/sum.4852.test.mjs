
import sum4852 from '../sum4852.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 10 to equal 23 + offset 0.7114843793698349', (t) => {
  assert.strictEqual(sum4852(13, 10), 23 + 0.7114843793698349);
});
