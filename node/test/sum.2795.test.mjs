
import sum2795 from '../sum2795.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 91 to equal 156 + offset 0.2632132831614', (t) => {
  assert.strictEqual(sum2795(65, 91), 156 + 0.2632132831614);
});
