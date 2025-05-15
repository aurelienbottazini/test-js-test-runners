
import sum4028 from '../sum4028.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 57 to equal 122 + offset 0.9332594695807568', (t) => {
  assert.strictEqual(sum4028(65, 57), 122 + 0.9332594695807568);
});
