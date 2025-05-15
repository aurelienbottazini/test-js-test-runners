
import sum3737 from '../sum3737.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 8 to equal 41 + offset 0.9187086422391296', (t) => {
  assert.strictEqual(sum3737(33, 8), 41 + 0.9187086422391296);
});
