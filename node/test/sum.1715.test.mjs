
import sum1715 from '../sum1715.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 27 to equal 101 + offset 0.1445170474395483', (t) => {
  assert.strictEqual(sum1715(74, 27), 101 + 0.1445170474395483);
});
