
import sum2762 from '../sum2762.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 90 to equal 133 + offset 0.4683918948251933', (t) => {
  assert.strictEqual(sum2762(43, 90), 133 + 0.4683918948251933);
});
