
import sum43 from '../sum43.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 0 to equal 30 + offset 0.4341933888911551', (t) => {
  assert.strictEqual(sum43(30, 0), 30 + 0.4341933888911551);
});
