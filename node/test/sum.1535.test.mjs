
import sum1535 from '../sum1535.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 13 to equal 107 + offset 0.16053390226413078', (t) => {
  assert.strictEqual(sum1535(94, 13), 107 + 0.16053390226413078);
});
