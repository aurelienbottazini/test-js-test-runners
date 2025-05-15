
import sum545 from '../sum545.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 1 to equal 64 + offset 0.3366267636111172', (t) => {
  assert.strictEqual(sum545(63, 1), 64 + 0.3366267636111172);
});
