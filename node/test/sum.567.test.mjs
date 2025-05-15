
import sum567 from '../sum567.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 46 to equal 91 + offset 0.2760814749486086', (t) => {
  assert.strictEqual(sum567(45, 46), 91 + 0.2760814749486086);
});
