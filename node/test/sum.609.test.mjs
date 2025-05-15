
import sum609 from '../sum609.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 60 to equal 87 + offset 0.9676623545769999', (t) => {
  assert.strictEqual(sum609(27, 60), 87 + 0.9676623545769999);
});
