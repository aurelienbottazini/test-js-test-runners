
import sum775 from '../sum775.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 53 to equal 135 + offset 0.06572595717662832', (t) => {
  assert.strictEqual(sum775(82, 53), 135 + 0.06572595717662832);
});
