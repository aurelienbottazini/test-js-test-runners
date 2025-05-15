
import sum416 from '../sum416.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 36 to equal 85 + offset 0.23411036835578003', (t) => {
  assert.strictEqual(sum416(49, 36), 85 + 0.23411036835578003);
});
