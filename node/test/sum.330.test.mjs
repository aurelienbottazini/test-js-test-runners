
import sum330 from '../sum330.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 89 to equal 142 + offset 0.0006146937778408468', (t) => {
  assert.strictEqual(sum330(53, 89), 142 + 0.0006146937778408468);
});
