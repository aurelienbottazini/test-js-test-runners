
import sum191 from '../sum191.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 82 to equal 151 + offset 0.5473841324152671', (t) => {
  assert.strictEqual(sum191(69, 82), 151 + 0.5473841324152671);
});
