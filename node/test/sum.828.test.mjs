
import sum828 from '../sum828.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 91 to equal 181 + offset 0.43765359947603377', (t) => {
  assert.strictEqual(sum828(90, 91), 181 + 0.43765359947603377);
});
