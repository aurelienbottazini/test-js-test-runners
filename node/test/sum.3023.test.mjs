
import sum3023 from '../sum3023.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 40 to equal 76 + offset 0.5693252879847615', (t) => {
  assert.strictEqual(sum3023(36, 40), 76 + 0.5693252879847615);
});
