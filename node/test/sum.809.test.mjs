
import sum809 from '../sum809.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 54 to equal 121 + offset 0.24910057779924666', (t) => {
  assert.strictEqual(sum809(67, 54), 121 + 0.24910057779924666);
});
