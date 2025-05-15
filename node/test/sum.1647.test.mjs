
import sum1647 from '../sum1647.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 0 to equal 8 + offset 0.38758080762351765', (t) => {
  assert.strictEqual(sum1647(8, 0), 8 + 0.38758080762351765);
});
