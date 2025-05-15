
import sum422 from '../sum422.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 7 to equal 54 + offset 0.4591124191773053', (t) => {
  assert.strictEqual(sum422(47, 7), 54 + 0.4591124191773053);
});
