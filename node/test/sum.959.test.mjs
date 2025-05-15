
import sum959 from '../sum959.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 98 to equal 184 + offset 0.5543789477821603', (t) => {
  assert.strictEqual(sum959(86, 98), 184 + 0.5543789477821603);
});
