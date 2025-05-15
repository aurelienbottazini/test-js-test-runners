
import sum815 from '../sum815.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 69 to equal 100 + offset 0.2755639137159056', (t) => {
  assert.strictEqual(sum815(31, 69), 100 + 0.2755639137159056);
});
