
import sum909 from '../sum909.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 17 to equal 90 + offset 0.33783123182355146', (t) => {
  assert.strictEqual(sum909(73, 17), 90 + 0.33783123182355146);
});
