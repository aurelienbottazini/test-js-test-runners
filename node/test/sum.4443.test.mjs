
import sum4443 from '../sum4443.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 6 to equal 58 + offset 0.002252172312991352', (t) => {
  assert.strictEqual(sum4443(52, 6), 58 + 0.002252172312991352);
});
