
import sum3784 from '../sum3784.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 60 to equal 117 + offset 0.3396237341864299', (t) => {
  assert.strictEqual(sum3784(57, 60), 117 + 0.3396237341864299);
});
